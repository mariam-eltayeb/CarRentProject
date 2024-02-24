import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TablePagination, Button, Tooltip, tooltipClasses, Typography, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DbCarsAdd from './dbCarsAdd';
import { useTheme } from '@emotion/react';
import DbCarsUpdate from './dbCarsUpdate';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCarAction, getAllCarAction } from '../../../features/car/carActions';

import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import CarRentalIcon from '@mui/icons-material/CarRental';
import PeopleIcon from '@mui/icons-material/People';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RateReviewIcon from '@mui/icons-material/RateReview';
import '../dashboardtrial.css'

import UpdateModel from './dbCarsUpdate';


function DbCars() {
//redaing data 
  const carsInfo = useSelector((state)=>state.car.car)|| []
	const dispatch = useDispatch();
  console.log(carsInfo);
	

	useEffect(()=>{
		dispatch(getAllCarAction());	
	},[])


   
	// console.log(carsInfo);



/////////////////////////////////////////////////
  const theme = useTheme();

  ////////////////////////////////pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Change the number of rows per page as needed

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 
  ////////////////////////////////////  slicing dscription 
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '20px', textAlign:"end" }}>   
        <DbCarsAdd></DbCarsAdd>
      </div>

 <div className="table-responsive">
            <table className="table table-hover table-nowrap">
                <thead className="thead-light">
                <tr>
                <td style={{paddingRight:"15px"}} >Id</td>
                <td >Car Name</td>
               
                <td >Type</td>
                <td >Steering </td>
                <td>Capacity</td>
                <td>Gasoline</td>
                <td>Price</td>
                <td>Reviews</td>
                <td title='No.Of Transaction'>No.Of Trans..</td>
                <td style={{width:"100px"}} title='No.Of Transaction'>Description</td>
                </tr>
                </thead>
                <tbody>

                  {(rowsPerPage > 0
                   ? carsInfo.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : carsInfo ).map((c, index) => (
                      c? <tr key={index}>
                      <td >
                          <div className='CarInfo'>
                          <LocalOfferIcon sx={{fontSize:"20px" , color:"#1A4393"}}></LocalOfferIcon>
                          <span className='carData' >
                          
                                {c?.id}
                          </span>
                          </div>
                      </td>

                    <td >
                          <div className='CarInfo'>
                          <img className="carImage" alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                          <span className='carData'>
                          {c?.name}
                          </span>
                          </div>
                      </td>
                  <td >
                       <div className='CarInfo'>
                       <span className='carData'>
                       {c?.type}
                          </span>
                       </div>
                      </td> 
                      <td >
                          <div className='CarInfo'>
                          <CarRentalIcon sx={{fontSize:'20px'}}></CarRentalIcon>
                      <span className='carData'>
                      {c?.steering}
                      </span>
                          </div>
                  </td>
                      <td >
                      <div className='CarInfo'>
                      <PeopleIcon sx={{fontSize:'20px'}}></PeopleIcon>
                          <span className='carData'>
                          {c?.chairCapacity}
                          </span>
                      </div>
                      </td>
                      <td >
                          <div className='CarInfo'>
                          <LocalGasStationIcon sx={{fontSize:'20px'}}></LocalGasStationIcon>
                          <span className='carData'>
                          {c.gasoline} L
                          </span>
                          </div>
                      </td>
                  <td >
                      <div className='CarInfo'>
                      <PriceChangeIcon sx={{color:"#306844", fontSize:"20px"}}></PriceChangeIcon>
                          <span className='carData'>
                          {c.price?c.price:0}lE
                          </span>
                      </div>
                      </td>
                      <td >
                         <div  className='CarInfo'>
                         <RateReviewIcon sx={{fontSize:'20px' , color:"#FAAF00"}}></RateReviewIcon>
                              <span className='carData'>
                              
                              {c.reviews?c.reviews.length:0}
                              </span>
                         </div>
                          </td>
                  <td >
                      <div className='CarInfo'>
                      {/* <RateReviewIcon sx={{fontSize:'20px'}}></RateReviewIcon> */}
                      <span className='carData'>
                      {c.transactions?c.transactions.length:0}
                      </span>
                      </div>
                  </td>

                  <td >
                    <div className='CarInfo'>
                    {/* <ReviewsIcon></ReviewsIcon> */}
                          <span className='carData' title={c.carDesc}>
                          {truncateDescription( c.carDesc , 20)}                           </span>
                    
                    </div>
                    </td>
                    <td>
                      
                    <UpdateModel carId={c.id}></UpdateModel> 

                    <Button title='delete' onClick={()=>dispatch(deleteCarAction(c.id))} sx={{color:"var(--clr-e-600)"}}>
                    <DeleteIcon/>
                    </Button >
                    </td>
                  </tr>:<CircularProgress color="primary" size={40} thickness={4} />
                  ))
                  }                  
                </tbody> 
              </table>
              <TablePagination sx={{ '& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar'  :{
                    fontSize: '1.5rem !important',
                    width:"100% !important"
                  },
                  '& .MuiTypography-body2': {
                    fontSize: '1.5rem !important'
                  }}}

                rowsPerPageOptions={[5, 10, 25]} // Change the options as needed
                component="div"
                count={carsInfo.length} // Total number of rows
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}/>
            </div>

    </div>
  );
}

export default DbCars;
