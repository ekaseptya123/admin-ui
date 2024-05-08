import "./mydatatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Name", width: 130 },
  
  
];

const rows = [
    { id: 1, firstName: "Coffee"},
    { id: 2, firstName: "Non Coffee"},
    { id: 3, firstName: "Cake"},
    { id: 4, firstName: "Patry"},
    { id: 5, firstName: "Cookie"},
  ];

const actionColumn = [

];


const MyDatatable = () => {
  return (
    <div className="mydatatable">
        <div className="mydatatableTitle">
        All Data
        </div>
      <DataGrid
        rows={rows}
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
