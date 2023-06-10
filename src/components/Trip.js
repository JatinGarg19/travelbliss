import "./TripStyles.css"
import TripData from "./TripData"
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

function Trip () {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover great destinations using Google Maps.</p>
            <div className="tripCard">
                <TripData 
                image = {Trip1}
                heading = "Trip to Manali"
                text = "With spectacular valleys, breathtaking views, snowcapped mountains, and lush forests of oak, 
                        deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley in 
                        Himachal Pradesh. Gifted to the world by the mighty Himalayas, it is known to be one of the 
                        most popular destinations for Honeymooners. Manali offers magnificent views of the Pir Panjal 
                        and the Dhauladhar ranges, covered in a thick blanket of snow for most of the year."

                />

                <TripData 
                image = {Trip2}
                heading = "Trip to Coorg"
                text = "Located amidst imposing mountains in Karnataka with a perpetually misty landscape, 
                        Coorg is a popular coffee producing hill station. It is popular for its beautiful green 
                        hills and the streams cutting right through them. It also stands as a popular destination 
                        because of its culture and people. The Kodavas, a local clan specializing in martial arts, 
                        are especially notable for their keen hospitality."

                />

                <TripData   
                image = {Trip3}
                heading = "Trip to Rishikesh"
                text = "Set against the backdrop of the Himalayas and with the pristine Ganga flowing through it, 
                         the ancient town of Rishikesh is one of the major tourist and pilgrimage hubs in northern 
                         India, where people from across the world arrive in search of peace. Rishikesh has numerous
                         ashrams, some of which are internationally recognised as centres of philosophical studies, 
                         yoga and other ancient Indian traditions of wellness."
                />

                
            </div>
        </div>
    )
}

export default Trip