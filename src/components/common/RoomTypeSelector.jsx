import { useState, useEffect } from "react"
import { getRoomTypes } from "../utils/ApiFunctions"

const RoomTypeSelector = ({  newRoom }) => {
	const [roomTypes, setRoomTypes] = useState([""])

	useEffect(() => {
		getRoomTypes().then((data) => {
			setRoomTypes(data)
		})
	}, [])


	return (
		<>
			{roomTypes.length > 0 && (
				<div>
					<select
						required
						className="form-select"
						name="roomType"
			
						value={newRoom.roomType}>
						<option value="">Select a room type</option>
						<option >Deluxe</option>
						<option >Single suite</option>
						<option >Double suite</option>
						<option >Beach view</option>
						{roomTypes.map((type, index) => (
							<option key={index} value={type}>
								{type}
							</option>
						))}
					</select>
				</div>
			)}
		</>
	)
}

export default RoomTypeSelector
