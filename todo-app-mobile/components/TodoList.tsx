/**
 * TodoList Component - React Native version for displaying multiple todo items
 * TodoList组件 - 显示多个待办事项的React Native版本
 */

import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (id: number, text: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ 
  todos, 
  onToggleTodo, 
  onDeleteTodo, 
  onEditTodo 
}) => {
  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>📝</Text>
      <Text style={styles.emptyTitle}>No todos yet / 还没有待办事项</Text>
      <Text style={styles.emptySubtitle}>
        Add your first todo item above to get started!
      </Text>
      <Text style={styles.emptySubtitle}>
        在上面添加您的第一个待办事项以开始使用！
      </Text>
    </View>
  );

  const renderListStats = () => {
    const totalItems = todos.length;
    const completedItems = todos.filter(todo => todo.completed).length;
    const activeItems = totalItems - completedItems;

    return (
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statText}>
            📋 Total: {totalItems} / 总计: {totalItems}
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statText}>
            ✅ Completed: {completedItems} / 已完成: {completedItems}
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statText}>
            🔄 Active: {activeItems} / 活跃: {activeItems}
          </Text>
        </View>
      </View>
    );
  };

  const renderTodoItem = ({ item }: { item: Todo }) => (
    <TodoItem
      todo={item}
      onToggle={onToggleTodo}
      onDelete={onDeleteTodo}
      onEdit={onEditTodo}
    />
  );

  return (
    <View style={styles.container}>
      {todos.length > 0 && renderListStats()}
      
      {todos.length === 0 ? (
        renderEmptyState()
      ) : (
        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      )}

      {todos.length > 10 && (
        <View style={styles.paginationContainer}>
          <Text style={styles.paginationText}>
            Showing {todos.length} items / 显示 {todos.length} 项
          </Text>
        </View>
      )}

      <View style={styles.shortcutsContainer}>
        <Text style={styles.shortcutsTitle}>
          Tips / 提示:
        </Text>
        <Text style={styles.shortcutText}>
          • Long press on todo text to edit / 长按待办事项文本进行编辑
        </Text>
        <Text style={styles.shortcutText}>
          • Tap checkbox to toggle completion / 点击复选框切换完成状态
        </Text>
        <Text style={styles.shortcutText}>
          • Tap delete button for confirmation / 点击删除按钮进行确认
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statText: {
    fontSize: 12,
    color: '#495057',
    fontWeight: '500',
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 60,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 4,
  },
  paginationContainer: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  paginationText: {
    fontSize: 14,
    color: '#495057',
    fontWeight: '500',
  },
  shortcutsContainer: {
    backgroundColor: '#e9ecef',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  shortcutsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  shortcutText: {
    fontSize: 14,
    color: '#495057',
    lineHeight: 20,
    marginBottom: 4,
  },
});

export default TodoList;