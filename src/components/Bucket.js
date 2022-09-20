import { useState } from "react";
import { BucketForm } from "./BucketForm";

export const Bucket = ({
  bucket,
  completeBucketItem,
  removeBucketItem,
  editBucketItem,
}) => {
  const [edit, setEdit] = useState();

  const submitUpdate = (newItem) => {
    editBucketItem(edit.id, newItem);

    setEdit();
  };

  if (edit) {
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
      <div
        onClick={() => {
          completeBucketItem(item.id);
        }}
      >
        {item.text}
      </div>
      <div className="icons">
        <p
          onClick={() => {
            setEdit(item);
          }}
        >
          {" "}
          ✏️
        </p>
        <p
          onClick={() => {
            removeBucketItem(item.id);
          }}
        >
          {" "}
          🗑️
        </p>
      </div>
    </div>
  ));
};
