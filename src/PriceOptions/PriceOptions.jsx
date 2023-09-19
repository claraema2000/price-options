import PriceOption from "../Components/PriceOption/PriceOption";

const PriceOptions = () => {

  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": 30,
      "features": [
        "Access to gym facilities",
        "Cardio equipment usage",
        "Locker room access",
        "Basic fitness classes"
      ]
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "price": 50,
      "features": [
        "Access to gym facilities",
        "Cardio equipment usage",
        "Locker room access",
        "Unlimited fitness classes",
        "Personalized fitness consultation"
      ]
    },
    {
      "id": 3,
      "name": "Family Membership",
      "price": 80,
      "features": [
        "Access to gym facilities for the whole family",
        "Cardio equipment usage",
        "Locker room access",
        "Unlimited fitness classes",
        "Childcare services",
        "Group training sessions"
      ]
    }
  ]


  return (
    <div className=" mx-10 mb-10">
      <h2 className="text-5xl font-semibold my-16">Best  Prices in The Town</h2>
      <div className='grid md:grid-cols-3 gap-10'>
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>

    </div>
  );
};

export default PriceOptions;