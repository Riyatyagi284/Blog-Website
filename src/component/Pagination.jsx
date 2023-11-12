import React from 'react'
import { useContext } from 'react';
import './Pagination.css'
import { AppContext } from '../ContextApp/context'

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext)

  if (!totalPages) return null;

  return (
    <div className='pagidiv1'>
      <div className='pagidiv2'>
        <div className='pagidiv3'>
          {
            page > 1 &&
            (<button
              className='btn'
              onClick={() => handlePageChange(page - 1)}>
              Previous
            </button>)
          }

          {
            page < totalPages &&
            (<button
              className='btn'
              onClick={() => handlePageChange(page + 1)}>
              Next
            </button>)
          }
        </div>
        {
          <p className='pagiPara1'>
            Page {page} of {totalPages}
          </p>
        }
      </div>
    </div>
  )
}

export default Pagination
