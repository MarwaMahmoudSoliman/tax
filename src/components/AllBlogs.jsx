import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Blog from "./Blog";
import BlogAdmin from "./BlogAdmin";

export default function AllBlogs() {
  const allUsers = [
    {
      id: "1",
      title: " ahet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ",
      btnDel: "delete",
      btnEdit: "edit",
    },
    {
      id: "2",
      title: " amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ",
      btnDel: "delete",
      btnEdit: "edit",
    },
    {
      id: "3",
      title: " amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ",
      btnDel: "delete",
      btnEdit: "edit",
    },
    {
      id: "4",
      title: " amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod mohamed incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ",
      btnDel: "delete",
      btnEdit: "edit",
    },
    {
      id: "5",
      title: " amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ",
      btnDel: "delete",
      btnEdit: "edit",
    },
    {
      id: "6",
      title: " amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ",
      btnDel: "delete",
      btnEdit: "edit",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");


  const filteredBlogs = allUsers.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="col-12 m-auto p-fluid py-4 px-5 mb-4"
      style={{ borderRadius: "15px", backgroundColor: "#fff" }}
    >
      <div className="d-flex justify-content-between">
        <div className="col-7">
          <h2
            className="ms-2 mt-2"
            style={{ color: "#4A5568", fontSize: "25px" }}
          >
            All blogs
          </h2>
        </div>
        <div className="position-relative mb-3 col-4 me-3">
          <FontAwesomeIcon
            className="fs-5 position-absolute"
            icon={faSearch}
            style={{ top: "12px", left: "13px", color: "#9098b1" }}
          />
          <InputText className="py-2 px-5 " placeholder="Search list..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
      </div>
      <div className="col-12 d-flex flex-wrap">
        {filteredBlogs.map((blog) => (
          <div className="col-12 col-md-6 col-xl-4 p-2" key={blog.id}>
            <BlogAdmin
            />
          </div>
        ))}
      </div>
    </div>
  );
}
