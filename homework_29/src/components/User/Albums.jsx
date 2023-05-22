import React from 'react'
import { useParams } from 'react-router-dom';

export default function Albums() {
  const params = useParams();
  console.log(params);
  return params.userId ? (
    <div>Albums</div>
  ) : null;
}
