import { useState } from "react";
import { BucketForm } from "./BucketForm";

export const Bucket = ({
  bucket,
  completeBucketItem,
  removeBucketItem,
  editBucketItem,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    eagerness: "",
  });

  const submitUpdate = (value) => {
    // TODO: Write logic to update the `edit` value in state after a user updates an entry in the list
    // TODO: Set the key:value pairs in the `edit` object back to empty strings
  };

  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return bucket.map((item, index) => (
    <div
      className={
        item.isComplete
          ? `bucket row complete ${item.eagerness}`
          : `bucket-row ${item.eagerness}`
      }
      key={index}
    >
      <div onClick={completeBucketItem}>{item.text}</div>
      <div className="icons">
        <p onClick={editBucketItem}> ✏️</p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={removeBucketItem}> 🗑️</p>
      </div>
    </div>
  ));
};

export default Bucket;
