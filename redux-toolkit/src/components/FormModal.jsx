import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/slices/crudSlice";

const FormModal = ({ isOpen, handleClose, editItem }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const taskData = Object.fromEntries(formData.entries());

    if (editItem) {
      dispatch(editTask({id: editItem.id, ...taskData}))
    } else {
      dispatch(addTask(taskData));
    }

    handleClose();
  };
  return (
    <Modal centered show={isOpen} className="text-black">
      <Modal.Header>
        <Modal.Title>
          {editItem ? "Görevi Güncelle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4 ">
          <Form.Group>
            <Form.Label>Görev Basligi</Form.Label>
            <Form.Control
              name="title"
              placeholder="Navbari Düzenle"
              required
              defaultValue={editItem?.title}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Isminiz</Form.Label>
            <Form.Control
              name="author"
              required
              defaultValue={editItem?.author}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Atanilacak Kisi:</Form.Label>
            <Form.Control
              name="assigned_to"
              required
              defaultValue={editItem?.asigned_to}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Son Teslim Tarihi:</Form.Label>
            <Form.Control
              type="date"
              name="end_date"
              required
              defaultValue={editItem?.end_date}
            />
          </Form.Group>
          <Modal.Footer>
            <Button onClick={handleClose} type="button" variant="secondary">
              Iptal
            </Button>
            <Button type="submit">{editItem ? "Kaydet" : "Olustur"}</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
