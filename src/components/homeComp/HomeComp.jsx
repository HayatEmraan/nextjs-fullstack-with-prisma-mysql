"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const HomeComp = () => {
  const [updateInput, setUpdateInput] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const [todoId, setTodoId] = React.useState("");

  const router = useRouter();
  const handleCreateTodo = (e) => {
    e.preventDefault();
    const todo = e.target.todo.value;
    fetch("/api/crud", {
      method: "POST",
      body: JSON.stringify({
        task: todo,
        isComplete: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your todo has been added",
          showConfirmButton: false,
          timer: 500,
        });
      });
  };

  const handleDeleteTodo = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`/api/crud?id=${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your todo has been deleted",
              showConfirmButton: false,
              timer: 500,
            });
            router.refresh();
          })
          .catch((err) => console.log(err));
      }
    });
  };
  const handleUpdateTodo = (e) => {
    e.preventDefault();
    const todo = e.target.todo.value;
    console.log(todo);
    Swal.fire({
      title: "Are you sure?",
      text: "Your todo will be updated!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`/api/crud?id=${todoId}`, {
          method: "PUT",
          body: JSON.stringify({
            task: todo,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your todo has been updated",
              showConfirmButton: false,
              timer: 500,
            });
            router.refresh();
          })
          .catch((err) => console.log(err));
      }
    });
  };
  const handleDoneTodo = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your todo will be completed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`/api/crud?id=${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your todo has been completed",
              showConfirmButton: false,
              timer: 500,
            });
            router.refresh();
          })
          .catch((err) => console.log(err));
      }
    });
  };

  useEffect(() => {
    fetch("/api/crud")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:max-w-3xl">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <form
            className="flex mt-4"
            onSubmit={updateInput ? handleUpdateTodo : handleCreateTodo}
          >
            <input
              name="todo"
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
              defaultValue={updateInput}
            />
            <button
              type="submit"
              className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-700"
            >
              {updateInput ? "Update" : "Add"}
            </button>
          </form>
        </div>
        <div>
          {todos?.data?.map((item) => {
            return (
              <div className="flex mb-4 items-center" key={item.id}>
                <p
                  className={`${
                    item.isComplete ? "line-through" : ""
                  } w-full text-green`}
                >
                  {item?.task}
                </p>
                <button
                  onClick={() => handleDoneTodo(item?.id)}
                  className="flex-no-shrink p-2  border-2 rounded hover:text-white text-green border-green hover:bg-green-300"
                >
                  Done
                </button>
                <button
                  onClick={() => {
                    setTodoId(item?.id);
                    setUpdateInput(item?.task);
                  }}
                  className="flex-no-shrink p-2 ml-1 border-2 rounded hover:text-white text-grey border-grey hover:bg-gray-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteTodo(item?.id)}
                  className="flex-no-shrink p-2 ml-1 border-2 rounded text-red border-red hover:text-white hover:bg-red-300"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
