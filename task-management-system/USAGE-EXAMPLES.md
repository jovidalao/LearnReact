# Usage Examples / 使用示例

This document provides practical examples of how to use the Task Management System features.

此文档提供了如何使用任务管理系统功能的实际示例。

## 🚀 Getting Started / 开始使用

### 1. First-Time Setup / 首次设置

**Step 1: Create an Account / 创建账户**
```
1. Navigate to http://localhost:3001
2. Click "Sign Up / 注册"
3. Fill in your details:
   - Name: John Doe
   - Email: john@example.com
   - Password: (minimum 6 characters)
   - Confirm Password: (same as above)
4. Click "Sign up / 注册"
5. You'll be redirected to the sign-in page
```

**Step 2: Sign In / 登录**
```
1. Enter your email and password
2. Click "Sign in / 登录"
3. You'll be redirected to the dashboard
```

## 📋 Task Management / 任务管理

### Creating Tasks / 创建任务

**Basic Task Creation / 基本任务创建**
```javascript
// Example task data
{
  title: "Complete project documentation",
  description: "Write comprehensive documentation for the new feature",
  priority: "HIGH",
  dueDate: "2024-01-15"
}
```

**Steps to Create a Task / 创建任务的步骤**
1. Click "Create Task / 创建任务" button
2. Fill in the form:
   - Title: "Complete project documentation"
   - Description: "Write comprehensive documentation for the new feature"
   - Priority: Select "High / 高"
   - Due Date: Select date from calendar
3. Click "Create Task / 创建任务"

### Task Status Management / 任务状态管理

**Status Options / 状态选项**
- **Pending / 待处理**: New tasks waiting to be started
- **In Progress / 进行中**: Tasks currently being worked on
- **Completed / 已完成**: Finished tasks
- **Cancelled / 已取消**: Tasks that won't be completed

**Updating Task Status / 更新任务状态**
```
Method 1: Quick Actions (on task card)
- Click "Start / 开始" to move to In Progress
- Click "Complete / 完成" to mark as completed
- Click "Reopen / 重新开放" to move back to Pending

Method 2: Edit Task
- Click the three dots menu on task card
- Select "Edit / 编辑"
- Change status in the dropdown
- Click "Update Task / 更新任务"
```

### Task Filtering and Search / 任务过滤和搜索

**Search Examples / 搜索示例**
```
Search by title:
- "documentation" - finds all tasks with "documentation" in title
- "bug" - finds all bug-related tasks
- "feature" - finds all feature-related tasks

Search by description:
- "urgent" - finds tasks with "urgent" in description
- "client" - finds client-related tasks
```

**Filter Examples / 过滤示例**
```
Filter by Status:
- All / 全部: Shows all tasks
- Pending / 待处理: Shows only pending tasks
- In Progress / 进行中: Shows only active tasks
- Completed / 已完成: Shows only completed tasks

Filter by Priority:
- All / 全部: Shows all priorities
- Urgent / 紧急: Shows only urgent tasks
- High / 高: Shows only high priority tasks
- Medium / 中: Shows only medium priority tasks
- Low / 低: Shows only low priority tasks
```

### Task Organization / 任务组织

**Sorting Options / 排序选项**
```
Sort by Created Date:
- Ascending: Oldest first
- Descending: Newest first (default)

Sort by Due Date:
- Ascending: Due soonest first
- Descending: Due latest first

Sort by Priority:
- Ascending: Low to Urgent
- Descending: Urgent to Low
```

## 👥 Team Collaboration / 团队协作

### Task Assignment / 任务分配

**Creating Team Tasks / 创建团队任务**
```javascript
// Example team task
{
  title: "Design review meeting",
  description: "Review the new UI designs with the team",
  priority: "MEDIUM",
  assignedTo: "team-member-id",
  teamId: "design-team-id",
  dueDate: "2024-01-20"
}
```

**Assignment Process / 分配流程**
1. Create or edit a task
2. Select team member from "Assigned to" dropdown
3. Select team from "Team" dropdown
4. Save the task

### Task Comments / 任务评论

**Adding Comments / 添加评论**
```
1. Open a task card
2. Scroll to comments section
3. Type your comment
4. Click "Add Comment / 添加评论"
```

**Comment Examples / 评论示例**
```
Progress Updates:
- "Started working on this task, ETA is tomorrow"
- "Completed the first draft, ready for review"
- "Found an issue, need to discuss with team"

Questions and Clarifications:
- "Should we include mobile responsive design?"
- "What's the preferred color scheme?"
- "Do we need user testing for this feature?"
```

## 📊 Analytics and Reporting / 分析和报告

### Task Statistics / 任务统计

**Dashboard Metrics / 仪表板指标**
```
Task Count by Status:
- Pending: 15 tasks
- In Progress: 8 tasks
- Completed: 23 tasks
- Total: 46 tasks

Priority Distribution:
- Urgent: 3 tasks
- High: 12 tasks
- Medium: 20 tasks
- Low: 11 tasks
```

### Progress Tracking / 进度跟踪

**Individual Progress / 个人进度**
```
Personal Task Summary:
- Tasks Created: 25
- Tasks Assigned: 18
- Tasks Completed: 30
- Completion Rate: 65%
```

**Team Progress / 团队进度**
```
Team Performance:
- Active Team Members: 5
- Team Tasks: 35
- Completed This Week: 12
- Overdue Tasks: 3
```

## 🔧 Advanced Features / 高级功能

### Keyboard Shortcuts / 键盘快捷键

**Common Shortcuts / 常用快捷键**
```
Navigation:
- Ctrl/Cmd + K: Quick search
- Ctrl/Cmd + N: New task
- Ctrl/Cmd + E: Edit selected task
- Ctrl/Cmd + D: Delete selected task

Status Changes:
- Ctrl/Cmd + S: Mark as In Progress
- Ctrl/Cmd + C: Mark as Completed
- Ctrl/Cmd + R: Mark as Pending
```

### Bulk Operations / 批量操作

**Multiple Task Selection / 多任务选择**
```
1. Hold Ctrl/Cmd while clicking tasks
2. Select multiple tasks
3. Use bulk action buttons:
   - Mark all as completed
   - Change priority for all
   - Delete selected tasks
```

### Custom Filters / 自定义过滤器

**Advanced Filter Examples / 高级过滤器示例**
```
Complex Filters:
- High priority + Overdue tasks
- My tasks + In Progress
- Team tasks + Due this week
- Completed tasks + Last month
```

## 🎨 UI Customization / 界面自定义

### Theme Options / 主题选项

**Available Themes / 可用主题**
```
Light Theme (Default):
- Clean white background
- Blue accent colors
- High contrast text

Dark Theme:
- Dark background
- Reduced eye strain
- Consistent color scheme
```

### Language Settings / 语言设置

**Supported Languages / 支持的语言**
```
English (Default):
- Full feature support
- Complete documentation
- Community support

Chinese (中文):
- Bilingual interface
- Translated descriptions
- Cultural considerations
```

## 🔐 Security Features / 安全功能

### Account Security / 账户安全

**Password Requirements / 密码要求**
```
Password Policy:
- Minimum 6 characters
- At least one letter
- At least one number
- No common passwords
```

**Account Protection / 账户保护**
```
Security Features:
- Session timeout after inactivity
- Secure password storage
- HTTPS encryption
- CSRF protection
```

### Data Privacy / 数据隐私

**Data Handling / 数据处理**
```
Privacy Features:
- Personal data encryption
- User consent management
- Data export options
- Account deletion
```

## 📱 Mobile Usage / 移动端使用

### Mobile Interface / 移动界面

**Mobile Features / 移动功能**
```
Responsive Design:
- Touch-friendly buttons
- Swipe gestures
- Mobile navigation
- Optimized forms
```

**Mobile Workflow / 移动工作流程**
```
Quick Actions:
- Tap to view task details
- Swipe to change status
- Long press for context menu
- Pull to refresh
```

## 🚀 Performance Tips / 性能提示

### Optimization / 优化

**Best Practices / 最佳实践**
```
Task Management:
- Keep task titles concise
- Use descriptions for details
- Archive completed tasks
- Regular cleanup of old data

Performance:
- Use filters instead of scrolling
- Limit displayed tasks per page
- Enable browser cache
- Use search for quick finding
```

## 🐛 Common Issues / 常见问题

### Troubleshooting / 故障排除

**Authentication Issues / 身份验证问题**
```
Problem: Can't log in
Solution: 
1. Check email and password
2. Clear browser cache
3. Try incognito mode
4. Reset password if needed
```

**Performance Issues / 性能问题**
```
Problem: Slow loading
Solution:
1. Refresh the page
2. Clear browser data
3. Check internet connection
4. Reduce active filters
```

## 📞 Support / 支持

### Getting Help / 获取帮助

**Support Channels / 支持渠道**
```
Documentation:
- README.md - Project overview
- SETUP-GUIDE.md - Installation guide
- USAGE-EXAMPLES.md - This file

Community:
- GitHub Issues - Bug reports
- Discord - Real-time chat
- Stack Overflow - Technical questions
```

---

**Happy Task Managing! / 任务管理愉快！** 🚀

For more detailed technical information, please refer to the README.md file.

有关更详细的技术信息，请参阅 README.md 文件。