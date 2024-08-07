import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const MyDatatable = ({columns}) => {
  const location = useLocation();
  const type = location.pathname.split('/')[1];
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, type),
      (snapShot) => {
        let mylist = [];
        snapShot.docs.forEach((doc) => {
          mylist.push({ id: doc.id, ...doc.data() });
        });
        setData(mylist);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, [type]); 

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, type, id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <span>
              <span
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </span>
            </span>
          </div>
        );
      },
    },
  ];

  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        All Data
        <Link to={"/" + type + "/new"} className="link" data-testid="add-new">
          Add New
        </Link>
      </div>
      <DataGrid className="datagrid" 
        rows={data}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;
