// src/__tests__/TodoApp.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from '../components/TodoApp';

describe('TodoApp', () => {
  test('renders input and button', () => {
    render(<TodoApp />);
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoApp />);
    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'Learn Jest' } });
    fireEvent.click(button);

    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
  });

  test('deletes a todo', () => {
    render(<TodoApp />);
    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'Test Delete' } });
    fireEvent.click(button);

    const deleteButton = screen.getByTestId('delete-button-0');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Test Delete')).not.toBeInTheDocument();
  });


});
