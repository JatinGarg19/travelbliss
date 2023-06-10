import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/13.jpg"
import img4 from "../assets/4.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>

            <DestinationData
                cName = "first-dest"
                heading="Baga Beach, Goa"
                text = "Escape to the captivating beauty of Baga Beach, an idyllic coastal retreat in Goa. Feel the warm embrace of golden sands beneath your feet as you bask in the radiant sun. Dive into the refreshing turquoise waters, indulging in thrilling watersports adventures. As the day turns into night, surrender to the vibrant energy of beachside parties and savor delectable seafood delicacies. Baga Beach offers an unforgettable blend of relaxation, excitement, and cultural charm for your ultimate tropical getaway."
                image1 = {img1}
                image2 = {img2}

            />

            <DestinationData
                cName = "second-dest"
                heading = "Mussoorie, Uttarakhand"
                text = "Nestled in the picturesque hills of Uttarakhand, Mussoorie beckons with its tranquil beauty. Explore the lush green landscapes, stroll along the Mall Road, and witness breathtaking views of the Himalayas. Visit iconic landmarks like Gun Hill and Kempty Falls, and indulge in adventurous treks to nearby peaks. With its pleasant climate and charming ambiance, Mussoorie is the perfect destination for nature lovers and seekers of serenity. Unwind and rejuvenate amidst the misty mountains of this enchanting hill station."
                image1 = {img3}
                image2 = {img4}

            />

        </div>
    )
}

export default Destination;