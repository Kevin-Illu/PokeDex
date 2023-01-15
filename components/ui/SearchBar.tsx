import { Container, Input, Spacer, useInput } from "@nextui-org/react"
import { useRouter } from "next/router";
import { Search } from "react-iconly"

export const SearchBar = () => {
  const {
    value,
    reset,
    bindings, } = useInput("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (typeof value === 'string' && !Number.isNaN(Number(value))) {
      router.push(`/name/${value.trim()}`);
    } else {
      const lowerCaseValue = value.toLowerCase().trim();
      router.push(`/pokemon/${lowerCaseValue}`)
    }

    reset()
  }

  return (
    <Container lg>
      <Spacer y={2} />
      <form onSubmit={handleSubmit}>
        <Input
          value={value}
          name="search"
          labelRight="Search"
          labelPlaceholder="Search pokemon by name or id"
          type={'search'}
          bordered
          color="primary"
          size="xl"
          width="100%"
          onChange={bindings.onChange}
          contentLeft={<Search set="bold" primaryColor="#0C61C6" />}
        />
      </form>
      <Spacer y={2} />
    </Container>
  )
}
