interface CampFormProps {
  label: string;
  state: any;
  funcState: any;
  formatter?: (value: string) => any;
}

export default function CompForm(props: CampFormProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (props.formatter) {
      props.funcState(props.formatter(value))
    } else {
      props.funcState(value)
    }
  }
  return (
    <div className="flex mx-2">
      <label className="w-[60px]">{props.label}</label>
      <input className="border p-1 w-full rounded-lg" value={props.state} onChange={handleChange} />
    </div>
  )
}
