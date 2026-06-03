import { render, screen } from '@testing-library/react';
import ClassInput from '../ClassInput.jsx';
import { describe, it, expect } from "vitest";

describe('ClassInput', () => {
  it('renders headline', () => {
    render(<ClassInput name="Class Input" />);

    screen.debug();

    // check if ClassInput components renders headline
  });
});