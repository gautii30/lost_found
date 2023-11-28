import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
function Detail() {
    const items = [
        {
          id: 1,
          name: "Apple AirPods",
          price: "21,000 rs",
          description:
            "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
          imageSrc:
            "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
        },
        {
          id: 2,
          name: "Sony Noise-Canceling Headphones",
          price: "1,00,000 rs",
          description:
            "Enjoy high-quality audio with noise-canceling technology and comfortable over-ear design.",
          imageSrc:
            "https://images.unsplash.com/photo-1558474717-45b90442ce9a",
        },
        {
          id: 3,
          name: "Canon EOS Rebel T7i",
          price: "60,000 rs",
          description:
            "Capture stunning photos and videos with this DSLR camera, featuring a 24.2-megapixel sensor.",
          imageSrc:
            "https://images.unsplash.com/photo-1507146426996-ef05306b995a",
        },
        {
          id: 4,
          name: "DJI Mavic Air 2 Drone",
          price: "10,00,000 rs",
          description:
            "Experience the thrill of aerial photography with this advanced drone featuring 4K video and 34-minute flight time.",
          imageSrc:
            "https://images.unsplash.com/photo-1602079547524-2b42108bea8a",
        },
        // Add more items here
      ];

  return (
    <div className="flex flex-wrap -mx-2">
        {items.map((item) => (
        <div key={item.id} className="w-1/3 px-2 mb-4">
        <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
             95.00 rs
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Details
        </Button>
      </CardFooter>
    </Card>
    </div>))}
</div>

  )
}

export default Detail