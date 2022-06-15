const Categories = [
  {
    id: 1,
    img: require("../../assets/images/m3.jpg"),
    heading: "Service,",
    paragraph: "Lorem ipsum is simply dummy text",
    backgroundColor: "#f6af80",
  },
  {
    id: 2,
    img: require("../../assets/images/m4.jpg"),
    heading: "Electricity,",
    paragraph: "Lorem ipsum is simply dummy text",
    backgroundColor: "#8ecc81",
  },
  {
    id: 3,
    img: require("../../assets/images/m5.jpg"),
    heading: "Savings,",
    paragraph: "Lorem ipsum is simply dummy text",
    backgroundColor: "#80ceee",
  },
];

const Transactions = [
  {
    id: 1,
    img: require("../../assets/images/m8.jpg"),
    heading: "Education",
    price: "149.00",
    backgroundColor: "#f6af80",
  },
  {
    id: 2,
    img: require("../../assets/images/m9.jpg"),
    heading: "Food",
    price: "149.00",
    backgroundColor: "#8ecc81",
  },
  {
    id: 3,
    img: require("../../assets/images/m11.jpg"),
    heading: "Transport",
    price: "149.00",
    backgroundColor: "#80ceee",
  },
];

const Transfer = [
  {
    id: 1,
    img: require("../../assets/images/flag1.png"),
    heading: "you send",
    price: "R 149.000",
    isSending: true,
  },
  {
    id: 2,
    img: require("../../assets/images/flag2.png"),
    heading: "they receive",
    price: "R 120.000",
    isSending: false,
  },
];

const Cards = [
  {
    id: 1,
    img: require("../../assets/images/m16.jpg"),
    price: "R 149.000",
    cardNum: "20136547592",
    backgroundColor: "#8ecc81",
  },
  {
    id: 2,
    img: require("../../assets/images/visa.jpg"),
    price: "R 140.000",
    cardNum: "21025634975",
    backgroundColor: "#f6af80",
  },
];
export { Categories, Transactions, Transfer, Cards };
