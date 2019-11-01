/* @flow */

import React from "react"

import type {Column, RightClickBuilder} from "../../types"
import {showContextMenu} from "../../lib/System"
import Field from "../../models/Field"
import FieldCell from "../FieldCell"
import Log from "../../models/Log"

export default function Table({className, ...props}: *) {
  return <table className={`table ${className}`} {...props} />
}

export function TableHeader({column}: {column: Column}) {
  return <th className={column.type}>{column.name}</th>
}

type Props = {
  log: Log,
  field: Field,
  rightClick?: RightClickBuilder
}

export function TableData({field, log, rightClick}: Props) {
  function onContextMenu() {
    rightClick && showContextMenu(rightClick(field.toBrimField(), log, false))
  }

  return (
    <td onContextMenu={onContextMenu} className={`${field.type} ${field.name}`}>
      <FieldCell field={field.toBrimField()} />
    </td>
  )
}
