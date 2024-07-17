import React from 'react'
import Filter from '../../filter/Filter'
import {listData} from './dummydata'
import Card from '../../components/Card';
import "./listPage.scss"
import Map from '../../components/map/Map';

const ListPage = () => {
  const data = listData;
  // console.log(data);

  return (
    <>
    <div className="listPage p-10 lg:mx-20 ">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <hr />
          {data.map(item=>(
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
    </>
  )
}

export default ListPage