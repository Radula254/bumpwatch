import { useState } from "react";
import UploadImage from "./UploadImage";
import { useProfile } from "../UseProfile";

export default function UserForm({ user, onSave }) {
  const [userName, setUserName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [salary, setSalary] = useState(user?.salary || "");
  const { data: loggedInUserData } = useProfile();

  return (
    <div className="flex gap-4 ">
      <div>
        <div className="p-2 rounded-lg relative max-w-[120px]">
          <UploadImage link={image} setLink={setImage} />
        </div>
      </div>
      <form
        className="grow"
        onSubmit={(ev) =>
          onSave(ev, {
            name: userName,
            image,
            phone,
            streetAddress,
            postalCode,
            city,
            country,
            salary,
          })
        }
      >
        <label>First and Last name:</label>
        <input
          type="text"
          placeholder="First and last name"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <label>Email:</label>
        <input type="email" disabled={true} value={user?.email} />
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
        />
        <label>Street Address:</label>
        <input
          type="text"
          placeholder="Street Address"
          value={streetAddress}
          onChange={(ev) => setStreetAddress(ev.target.value)}
        />
        <div className="flex gap-4">
          <div>
            <label>Postal Code:</label>
            <input
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(ev) => setPostalCode(ev.target.value)}
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(ev) => setCity(ev.target.value)}
            />
          </div>
        </div>
        <label>Country:</label>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(ev) => setCountry(ev.target.value)}
        />
        <label>Salary:</label>
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(ev) => setSalary(ev.target.value)}
        />
        <button
          type="submit"
          className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
        >
          Save
        </button>
      </form>
    </div>
  );
}
