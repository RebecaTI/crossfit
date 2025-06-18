interface CampFormProps {
  label: string;
  state: string | number;
  funcState: (value: string | number) => void;
  formatter?: (value: string) => string | number;
  onEnter?: () => void;
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

  const handleEnter = ((e) => {
    if (e.key === 'Enter' && props.onEnter) {
      props.onEnter();
    }
  })
  return (
    <div className="flex mx-2 border rounded-lg items-center">
      <label className="w-[60px] pl-3">{props.label}</label>
      <input
        className=" p-1 w-full"
        value={props.state}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
    </div>
  )
}
