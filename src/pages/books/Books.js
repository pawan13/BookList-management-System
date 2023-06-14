import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Container } from "react-bootstrap";
import BookTable from "../../components/book/BookTable";

const Books = () => {
  return (
    <UserLayout>
      <h3 className="mt-2 ms-2">Books</h3>
      <hr />
      <Container>
      <div className="text-end mb-3">
        <Button variant="primary">Add new Book<i class="fa-solid fa-plus"></i></Button>
      </div>
      {/* table here  */}
      <BookTable/>
      </Container>
    </UserLayout>
  );
};

export default Books;
