import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import './styles.css';

export const NewItemPage = () => {

  const { register, handleSubmit } = useForm();

  const history = useHistory();

  // Function to send a new groceryItem to the API
  const submitGroceryItem = async (formVals) => {
    const formattedData = {
      fields: {
        id: {
          integerValue: formVals.id
        },
        name: {
          stringValue: formVals.name
        },
        category: {
          stringValue: formVals.category
        },
        price: {
          doubleValue: formVals.price
        },
        img: {
          stringValue: formVals.img
        },
        weight: {
          integerValue: formVals.weight
        },
        description: {
          stringValue: formVals.description
        }
      }
    }

    try {
      const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4012-a03/databases/(default)/documents/groceries',
        {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(formattedData)
        });

      history.push('/');

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="new-item-page">
      <h1>Add a new grocery item</h1>
      <form className="form-layout" onSubmit={handleSubmit(submitGroceryItem)}>

        {/* Name */}
        <label htmlFor="name"> Name </label>
        <input
          {...register("name")}
          name="name"
          required
        />

        {/* Grocery item Category */}
        <label htmlFor="category"> Category </label>
        <input
          {...register("category")}
          name="category"
          required
          type="text"
        />

        {/* Image */}
        <label htmlFor="img"> Image URL </label>
        <input
          {...register("img")}
          name="img"
          required
        />

        {/* Age */}
        <label htmlFor="price"> Price </label>
        <input
          {...register("price")}
          name="price"
          required
        />

        {/* Age */}
        <label htmlFor="weight"> Weight </label>
        <input
          {...register("weight")}
          name="weight"
          required
        />

        {/* description */}
        <label htmlFor="description"> Description </label>
        <input
          {...register("description")}
          name="description"
          required
        />

        {/* ID */}
        <label htmlFor="id"> Unique ID </label>
        <input
          {...register("id")}
          name="id"
          required
        />

        <input type="submit" value="Submit Grocery Item" />
        <br />

      </form>
    </div>
  )
}
