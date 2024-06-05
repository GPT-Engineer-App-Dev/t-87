import { useState } from "react";
import { 
  Box, 
  Button, 
  Checkbox, 
  Container, 
  Flex, 
  Heading, 
  IconButton, 
  Input, 
  List, 
  ListItem, 
  Text, 
  VStack 
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Container maxW="container.md" py={10}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl">Todo App</Heading>
      </Flex>
      <Box mb={6}>
        <Flex>
          <Input
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            mr={2}
          />
          <Button onClick={addTodo} colorScheme="teal">Add</Button>
        </Flex>
      </Box>
      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index} display="flex" alignItems="center">
            <Checkbox
              isChecked={todo.completed}
              onChange={() => toggleTodo(index)}
              mr={3}
            />
            <Text as={todo.completed ? "s" : ""} flex="1">
              {todo.text}
            </Text>
            <IconButton
              aria-label="Delete todo"
              icon={<FaTrash />}
              onClick={() => deleteTodo(index)}
              colorScheme="red"
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Index;