import React, { useState } from 'react'
import projects from '../projects.json'

const Projects = () => {
   const [data, setData] = useState(projects)
   const [order, setOrder] = useState('ASC')

   const sorting = (col) => {
      if (order === 'ASC') {
         const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1))
         setData(sorted)
         setOrder('DSC')
      }
      if (order === 'DSC') {
         const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1))
         setData(sorted)
         setOrder('ASC')
      }
   }
   return (
      <div className="container">
         <h1 style={{ marginBottom: '30px' }}>Projects</h1>
         <table class="table table-striped">
            <thead>
               <tr>
                  <th scope="col">#</th>
                  <th onClick={() => sorting('name')} scope="col">
                     Name
                  </th>
                  <th onClick={() => sorting('size')} scope="col">
                     Size
                  </th>
               </tr>
            </thead>
            <tbody>
               {data.map((project, i) => (
                  <tr key={project.id}>
                     <th scope="row">{i}</th>
                     <td>{project.name}</td>
                     <td>{project.size} MB</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default Projects
