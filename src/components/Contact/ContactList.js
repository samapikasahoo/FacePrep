import React, { useState, useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";

const ITEMS_PER_PAGE = 10; // Number of items to load at a time
const API_URL = "https://randomuser.me/api/?results=500"; // API endpoint

export const ContactList = () => {
  const [loading, setLoading] = useState(false); // Flag to track loading state
  const [items, setItems] = useState([]); // Array of loaded items
  const [page, setPage] = useState(1); // Current page number

  useEffect(() => {
    // Function to load items from the API
    const loadItems = async () => {
      setLoading(true); // Set loading flag to true
      const response = await fetch(API_URL); // Fetch data from API
      const data = await response.json(); // Parse data as JSON
      setItems((prevItems) => [...prevItems, ...data.results]); // Add new items to existing ones
      setLoading(false); // Set loading flag to false
    };

    loadItems(); // Load initial items
  }, []);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      setPage((prevPage) => prevPage + 1); // Increment page number
    }
  };

  useEffect(() => {
    // Function to load more items when user scrolls to end of page
    const loadMoreItems = async () => {
      setLoading(true); // Set loading flag to true
      const response = await fetch(
        API_URL + `&page=${page}&results=${ITEMS_PER_PAGE}`
      ); // Fetch data from API with pagination
      const data = await response.json(); // Parse data as JSON
      setItems((prevItems) => [...prevItems, ...data.results]); // Add new items to existing ones
      setLoading(false); // Set loading flag to false
    };

    if (page > 1) {
      setTimeout(() => {
        loadMoreItems(); // Load more items if user has scrolled to end of page
      }, 9000);
    }
  }, [page]);

  return (
    <div
      onScroll={handleScroll}
      style={{ height: "100vh", overflowY: "scroll" }}
    >
      {items.map((item) => (
        <Card key={item.login.uuid} style={{ width: "100%", border: "none" }}>
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Card.Img
              src={item.picture.thumbnail}
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                marginRight: "16px",
              }}
            />
            <Card.Text
              style={{ flex: 1, margin: 0 }}
            >{`${item.name.first} ${item.name.last}`}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      {loading && (
        <div
          style={{ display: "flex", justifyContent: "center", margin: "16px" }}
        >
          <Spinner animation="border" role="status">
            <span className="sr-only"></span>
          </Spinner>
          Loading Data...
        </div>
      )}
    </div>
  );
};

export default ContactList;
