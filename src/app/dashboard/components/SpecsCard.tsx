import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export const SpecsCard = () => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={1435}
        src="https://media.es.wired.com/photos/6500b64ec39444b642c78a09/4:3/w_1913,h_1435,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg"
        width={1913}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
};
