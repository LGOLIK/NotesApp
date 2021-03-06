import React from 'react'
import { IconBtn } from './icon_btn'

export const DeleteBtn = (props) => {

  const handleDelete = (item) => {
    const confirmDelete = confirm(props.confirmMsg)

    if (confirmDelete) {
      props.handleDelete(item)
    }
  }

  return <IconBtn handleClick={()=> handleDelete(props.itemToDelete)}
            title={props.title}
            alt={props.title}
            icon={props.icon}
          />
}

DeleteBtn.propTypes = {
  itemToDelete: React.PropTypes.object.isRequired,
  handleDelete: React.PropTypes.func.isRequired,
  confirmMsg: React.PropTypes.string,
}

DeleteBtn.defaultProps = {
  icon: "glyphicon glyphicon-remove",
  title: "Delete...",
  confirmMsg: "Really delete this?"
}
