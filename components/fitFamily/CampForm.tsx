interface CampFormProps {
  label: string;
  state: string | number;
  funcState: (value: number) => void;
  formatter?: (value: string) => number;
}

export default function CompForm(props: CampFormProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (props.formatter) {
      props.funcState(props.formatter(value))
    } else {
      props.funcState(Number(value))
    }
  }
  console.log(props)
  return (

    <div className="flex mx-2 border rounded-lg items-center">
      <label className="w-[60px] pl-3">{props.label}</label>
      <input
        className=" p-1 w-full"
        value={props.state}
        onChange={handleChange}
      />
    </div>
  )
}
