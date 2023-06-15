import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Container } from "react-bootstrap";
import BookTable from "../../components/book/BookTable";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <UserLayout>
      <h3 className="mt-2 ms-2">Books</h3>
      <hr />
      <Container>
      <div className="text-end mb-3">
        <Link to="/new-book">
        <Button 
        variant="primary"
        >Add new Book<i className="fa-solid fa-plus"></i>
        </Button>
        </Link>
      </div>
      {/* table here  */}
      <BookTable/>
      </Container>
    </UserLayout>
  );
};

export default Books;
