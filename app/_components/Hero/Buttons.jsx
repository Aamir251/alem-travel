import Button from "@/components/ui/Button";

export default function Buttons() {

  return (
    <div className="flex gap-x-5 lg:gap-x-8 mt-7">
      <Button variant={'primary'}>
        Book Now
      </Button>
      <Button variant={'outline'}>
        View Intenary
      </Button>
    </div>
  )
}