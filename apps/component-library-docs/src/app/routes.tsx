import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import AccordionDocs from './pages/accordion/accordion-docs';
import Button from './pages/button/button-docs';
import Checkbox from './pages/checkbox/checkbox-docs';
import Card from './pages/card/card-docs';
import CheckboxGroup from './pages/checkbox-group/checkbox-group-docs';
import Icons from './pages/icons/icons-docs';
import Input from './pages/input/input-docs';
import Link from './pages/link/link-docs';
import Modal from './pages/modal/modal-docs';
import Radio from './pages/radio/radio-docs';
import Table from './pages/table/table-docs';

export default (
  <Routes>
    <Route path="/docs/home" element={<Home />} />
    <Route path="/docs/accordion-docs" element={<AccordionDocs />} />
    <Route path="/docs/button-docs" element={<Button />} />
    <Route path="/docs/card-docs" element={<Card />} />
    <Route path="/docs/icons-docs" element={<Icons />} />
    <Route path="/docs/input-docs" element={<Input />} />
    <Route path="/docs/checkbox-docs" element={<Checkbox />} />
    <Route path="/docs/checkbox-group-docs" element={<CheckboxGroup />} />
    <Route path="/docs/link-docs" element={<Link />} />
    <Route path="/docs/modal-docs" element={<Modal />} />
    <Route path="/docs/radio-docs" element={<Radio />} />
    <Route path="/docs/table-docs" element={<Table />} />
  </Routes>
);
