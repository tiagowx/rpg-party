import { render, screen } from "@testing-library/react";
import CreateRoom from ".";

describe("Tests to create room component.", () => {  
  test("It should show title.", () => {
    render(<CreateRoom />);
    const title = screen.getByText(/Criar uma Sala/i);
    expect(title).toBeInTheDocument();
  });
  
  test("It should show name box.", () => {
    render(<CreateRoom />);
    const name = screen.getByRole("name-box")
    expect(name).toBeInTheDocument();
  });
  
  test("It should show password box.", () => {
    render(<CreateRoom />);
    const pass = screen.getByRole("pass-box")
    expect(pass).toBeInTheDocument();
  });
  
  test("It should show visualise button from password.", () => {
    render(<CreateRoom />);
    const showPassBtn = screen.getByRole("show-pass-btn")
    expect(showPassBtn).toBeInTheDocument();
  });
  
  test("It should show create button.", () => {
    render(<CreateRoom />);
    const createBtn = screen.getByRole("create-btn")
    expect(createBtn).toBeInTheDocument();

  });
});
