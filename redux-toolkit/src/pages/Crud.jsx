import React, { useState } from "react";
import { Button, ButtonGroup, Container, Stack, Table } from "react-bootstrap";
import FormModal from "../components/FormModal";
import { useDispatch, useSelector } from "react-redux";
import crudReducer, { deleteTask } from "../redux/slices/crudSlice";
import counterReducer from "../redux/slices/counterSlice";
import store from "../redux/slices/store";

const Crud = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editItem, setEdititem] = useState(null);
  const { isDarkTheme } = useSelector((store) => store.counterReducer);
  const { tasks } = useSelector((store) => store.crudReducer);
  const dispatch = useDispatch();
  return (
    <div className="vh-100">
      <Container>
        <Stack className="align-items-end mt-5 mb-4">
          <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
        </Stack>
        <Table
          variant={isDarkTheme ? "dark" : "light"}
          responsive
          striped
          hover
          bordered
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Görev</th>
              <th>Yazan</th>
              <th>Atanan</th>
              <th>Tarih</th>
              <th>Islemler</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{task.title}</td>
                <td>{task.author}</td>
                <td>{task.assigned_to}</td>
                <td>{task.end_date}</td>
                <td>
                  <ButtonGroup size="sm">
                    <Button
                      onClick={() => {
                        setEdititem(task);
                        setIsOpen(true);
                      }}
                    >
                      Düzenle
                    </Button>
                    <Button
                      onClick={() => dispatch(deleteTask(task.id))}
                      variant="danger"
                    >
                      Sil
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <FormModal
        editItem={editItem}
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false), setEdititem(null);
        }}
      />
    </div>
  );
};

export default Crud;
