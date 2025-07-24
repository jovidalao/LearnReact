/**
 * 结账组件
 * Checkout component
 * 
 * 处理用户结账流程，包括地址信息、付款信息和订单确认
 * Handles user checkout process including address info, payment info, and order confirmation
 */

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

// 表单数据接口 / Form data interface
interface CheckoutFormData {
  // 个人信息 / Personal information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // 地址信息 / Address information
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  
  // 付款信息 / Payment information
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

// 表单验证错误接口 / Form validation errors interface
interface FormErrors {
  [key: string]: string;
}

/**
 * 结账组件
 * Checkout component
 */
export function Checkout() {
  const { items, getTotalPrice, clearCart } = useCart();
  
  // 表单数据状态 / Form data state
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  
  // 表单验证错误状态 / Form validation errors state
  const [errors, setErrors] = useState<FormErrors>({});
  
  // 提交状态 / Submit state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  /**
   * 处理输入变化
   * Handle input change
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 清除相关错误 / Clear related error
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  /**
   * 验证表单
   * Validate form
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // 验证必填字段 / Validate required fields
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone',
      'address', 'city', 'state', 'zipCode',
      'cardNumber', 'expiryDate', 'cvv', 'cardholderName'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field as keyof CheckoutFormData].trim()) {
        newErrors[field] = `此字段为必填项 / This field is required`;
      }
    });
    
    // 验证邮箱格式 / Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址 / Please enter a valid email address';
    }
    
    // 验证手机号格式 / Validate phone format
    const phoneRegex = /^\d{10,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = '请输入有效的手机号码 / Please enter a valid phone number';
    }
    
    // 验证信用卡号 / Validate credit card number
    const cardRegex = /^\d{16}$/;
    if (formData.cardNumber && !cardRegex.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = '请输入16位信用卡号 / Please enter a 16-digit card number';
    }
    
    // 验证有效期 / Validate expiry date
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (formData.expiryDate && !expiryRegex.test(formData.expiryDate)) {
      newErrors.expiryDate = '请输入有效期(MM/YY) / Please enter expiry date (MM/YY)';
    }
    
    // 验证CVV / Validate CVV
    const cvvRegex = /^\d{3,4}$/;
    if (formData.cvv && !cvvRegex.test(formData.cvv)) {
      newErrors.cvv = '请输入3-4位CVV / Please enter 3-4 digit CVV';
    }
    
    // 验证邮政编码 / Validate zip code
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (formData.zipCode && !zipRegex.test(formData.zipCode)) {
      newErrors.zipCode = '请输入有效的邮政编码 / Please enter a valid zip code';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  /**
   * 处理表单提交
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // 模拟API调用 / Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // 清空购物车 / Clear cart
    clearCart();
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  
  // 如果订单已提交 / If order is submitted
  if (isSubmitted) {
    return (
      <div className="checkout-success">
        <div className="success-icon">✅</div>
        <h2>订单提交成功！/ Order Submitted Successfully!</h2>
        <p>感谢您的购买，我们会尽快处理您的订单。</p>
        <p>Thank you for your purchase. We will process your order soon.</p>
        <div className="order-details">
          <h3>订单详情 / Order Details</h3>
          <p>订单号 / Order Number: #{Math.random().toString(36).substring(2, 15)}</p>
          <p>总金额 / Total Amount: ${(getTotalPrice() + 9.99).toFixed(2)}</p>
          <p>预计送达 / Estimated Delivery: 5-7 个工作日 / business days</p>
        </div>
      </div>
    );
  }
  
  // 如果购物车为空 / If cart is empty
  if (items.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>无法结账 / Cannot Checkout</h2>
        <p>您的购物车为空，请先添加商品。</p>
        <p>Your cart is empty. Please add items first.</p>
      </div>
    );
  }
  
  const subtotal = getTotalPrice();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;
  
  return (
    <div className="checkout">
      <div className="checkout-container">
        {/* 左侧表单 / Left side form */}
        <div className="checkout-form">
          <h2>结账信息 / Checkout Information</h2>
          
          <form onSubmit={handleSubmit}>
            {/* 个人信息 / Personal Information */}
            <fieldset className="form-section">
              <legend>个人信息 / Personal Information</legend>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">姓 / First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={errors.firstName ? 'error' : ''}
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">名 / Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={errors.lastName ? 'error' : ''}
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">邮箱 / Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">手机 / Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>
            </fieldset>
            
            {/* 地址信息 / Address Information */}
            <fieldset className="form-section">
              <legend>配送地址 / Shipping Address</legend>
              
              <div className="form-group">
                <label htmlFor="address">地址 / Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={errors.address ? 'error' : ''}
                />
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">城市 / City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={errors.city ? 'error' : ''}
                  />
                  {errors.city && <span className="error-message">{errors.city}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="state">州/省 / State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={errors.state ? 'error' : ''}
                  />
                  {errors.state && <span className="error-message">{errors.state}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="zipCode">邮编 / Zip Code *</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={errors.zipCode ? 'error' : ''}
                  />
                  {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
                </div>
              </div>
            </fieldset>
            
            {/* 付款信息 / Payment Information */}
            <fieldset className="form-section">
              <legend>付款信息 / Payment Information</legend>
              
              <div className="form-group">
                <label htmlFor="cardholderName">持卡人姓名 / Cardholder Name *</label>
                <input
                  type="text"
                  id="cardholderName"
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleInputChange}
                  className={errors.cardholderName ? 'error' : ''}
                />
                {errors.cardholderName && <span className="error-message">{errors.cardholderName}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="cardNumber">信用卡号 / Card Number *</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  className={errors.cardNumber ? 'error' : ''}
                />
                {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">有效期 / Expiry Date *</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    className={errors.expiryDate ? 'error' : ''}
                  />
                  {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="cvv">CVV *</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    className={errors.cvv ? 'error' : ''}
                  />
                  {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                </div>
              </div>
            </fieldset>
            
            {/* 提交按钮 / Submit button */}
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? '处理中... / Processing...' : '完成订单 / Complete Order'}
            </button>
          </form>
        </div>
        
        {/* 右侧订单摘要 / Right side order summary */}
        <div className="order-summary">
          <h3>订单摘要 / Order Summary</h3>
          
          <div className="summary-items">
            {items.map(item => (
              <div key={item.product.id} className="summary-item">
                <div className="item-info">
                  <span className="item-name">{item.product.name}</span>
                  <span className="item-quantity">x{item.quantity}</span>
                </div>
                <span className="item-price">${(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="summary-totals">
            <div className="total-row">
              <span>小计 / Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>运费 / Shipping:</span>
              <span>{shipping === 0 ? '免费 / Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="total-row total-final">
              <span>总计 / Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}