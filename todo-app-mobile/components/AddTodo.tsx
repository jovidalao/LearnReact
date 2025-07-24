/**
 * AddTodo Component - React Native version for adding new todo items
 * AddTodo组件 - 用于添加新待办事项的React Native版本
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const trimmedValue = inputValue.trim();
    
    if (trimmedValue === '') {
      setError('Please enter a todo item / 请输入待办事项');
      return;
    }
    
    if (trimmedValue.length > 100) {
      setError('Todo item is too long (max 100 characters) / 待办事项过长（最多100个字符）');
      return;
    }

    setError('');
    onAddTodo(trimmedValue);
    setInputValue('');
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (error) {
      setError('');
    }
  };

  const quickAddTodo = (text: string) => {
    onAddTodo(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.textInput, error ? styles.errorInput : null]}
          value={inputValue}
          onChangeText={handleInputChange}
          placeholder="What needs to be done? / 需要做什么？"
          placeholderTextColor="#999"
          maxLength={100}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
          multiline={false}
        />
        
        <TouchableOpacity 
          style={[styles.addButton, !inputValue.trim() && styles.disabledButton]}
          onPress={handleSubmit}
          disabled={!inputValue.trim()}
        >
          <Text style={styles.addButtonText}>Add / 添加 ➕</Text>
        </TouchableOpacity>
      </View>

      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      <View style={styles.helperContainer}>
        <Text style={styles.helperText}>
          Tap add button, maximum 100 characters / 点击添加按钮，最多100个字符
        </Text>
      </View>

      <View style={styles.quickAddContainer}>
        <Text style={styles.quickAddLabel}>Quick add / 快速添加:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickAddScroll}>
          <TouchableOpacity 
            style={styles.quickAddButton}
            onPress={() => quickAddTodo('Buy groceries / 买杂货')}
          >
            <Text style={styles.quickAddButtonText}>🛒 Groceries / 杂货</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.quickAddButton}
            onPress={() => quickAddTodo('Exercise / 锻炼')}
          >
            <Text style={styles.quickAddButtonText}>💪 Exercise / 锻炼</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.quickAddButton}
            onPress={() => quickAddTodo('Read a book / 读书')}
          >
            <Text style={styles.quickAddButtonText}>📚 Read / 读书</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginRight: 8,
  },
  errorInput: {
    borderColor: '#ff4757',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  errorContainer: {
    backgroundColor: '#ffe6e6',
    padding: 8,
    borderRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#ff4757',
    marginBottom: 8,
  },
  errorText: {
    color: '#ff4757',
    fontSize: 14,
  },
  helperContainer: {
    marginBottom: 12,
  },
  helperText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  quickAddContainer: {
    marginTop: 8,
  },
  quickAddLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  quickAddScroll: {
    flexDirection: 'row',
  },
  quickAddButton: {
    backgroundColor: '#e9ecef',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  quickAddButtonText: {
    fontSize: 12,
    color: '#495057',
    fontWeight: '500',
  },
});

export default AddTodo;