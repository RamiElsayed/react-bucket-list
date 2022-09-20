import { useState } from "react";
import { BucketForm } from "./BucketForm";
import { Bucket } from "./Bucket";

export const BucketList = () => {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    setBucket([item, ...bucket]);
  };

  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    const updatedBucket = bucket.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isComplete: true,
        };
      }
      return item;
    });

    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    const filteredBucket = bucket.filter((item) => {
      return item.id !== id;
    });
    setBucket(filteredBucket);
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newItem) => {
    if (!newItem.text) {
      return;
    }
    const updatedBucket = bucket.map((item) => {
      if (item.id === itemId) {
        return newItem;
      }
      return item;
    });
    setBucket(updatedBucket);
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      ></Bucket>
    </div>
  );
};

export default BucketList;
