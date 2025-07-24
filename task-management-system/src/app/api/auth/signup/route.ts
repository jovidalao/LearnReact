/**
 * User Registration API Route
 * 用户注册 API 路由
 * 
 * This endpoint handles user registration with email and password.
 * It creates a new user account and stores it in the database.
 * 
 * 此端点处理电子邮件和密码的用户注册。
 * 它创建一个新的用户帐户并将其存储在数据库中。
 */

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    // 解析请求体
    const { name, email, password } = await request.json()

    // Validate required fields
    // 验证必需字段
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required / 电子邮件和密码是必需的' },
        { status: 400 }
      )
    }

    // Check if user already exists
    // 检查用户是否已存在
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists / 用户已存在' },
        { status: 409 }
      )
    }

    // Hash the password before storing
    // 在存储之前散列密码
    const hashedPassword = await hashPassword(password)

    // Create the new user
    // 创建新用户
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        // Don't return password in response
        // 不要在响应中返回密码
      }
    })

    return NextResponse.json(
      { 
        message: 'User created successfully / 用户创建成功',
        user 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error / 内部服务器错误' },
      { status: 500 }
    )
  }
}