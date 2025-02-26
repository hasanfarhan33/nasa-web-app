import {render, screen, waitFor} from "@testing-library/react"; 
import ApodComponent from "../components/ApodComponent";
import fetchAPOD from "../services/nasaApodService_frontend";

// Mock the fetchAPOD function 
jest.mock("../services/nasaApodService_frontend"); 

describe("ApodComponent", () => {
    
    // Testing the loading 
    test("renders loading state", async () => {
        fetchAPOD.mockImplementation(() => new Promise(() => {}));  // Mocking a pending request

        render(<ApodComponent />); 
        expect(screen.getByText(/loading/i)).toBeInTheDocument(); 
    }); 
})