import zombie from "../asset/icons/image/zombie.jpg";
function DetailsPage ()  {
    return (
        <div className="text-center">
            <p className="font-mono text-2xl font-bold uppercase">About chargers</p>
            <p className="text-md mt-2 font-bold text-black mx-36"> 
            <div className="flex justify-center">
            <img src={zombie}alt="zombie" width={600}/>
            </div>
            The Charger is a Special Infected introduced
             in Left 4 Dead 2. His main purpose is to separate a group of Survivors 
             who are close together by grabbing one and carrying them away while 
             crashing into the rest of the group, sending them flying through the air. 
             While he matches the Survivors' pace, he speeds up considerably when charging. 
             However, the Charger cannot stop or turn during the charge until he hits a wall or travels a certain distance.{"\n"}
            </p>{" "}
        </div>
    );

}
export default DetailsPage;