import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import MyDatatable from "../../components/mydatatable/MyDatatable";



const MyList = ({columns}) => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="mylistContainer">
        <Navbar />
        <div className = "widgets">
          <Widget type = "user"/>
          <Widget type = "order"/>
          <Widget type = "earning"/>
          
        </div>
        <MyDatatable  columns={columns}/>
      </div>
    </div>
  );
};

export default MyList;