import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import AccordionDocs from './pages/accordion/accordion-docs';
import Button from './pages/button/button-docs';
import Checkbox from './pages/checkbox/checkbox-docs';
import CheckboxGroup from './pages/checkbox-group/checkbox-group-docs';
import Card from './pages/card/card-docs';
import Input from './pages/input/input-docs';
import Link from './pages/link/link-docs';
import Modal from './pages/modal/modal-docs';
import Radio from './pages/radio/radio-docs';
import Table from './pages/table/table-docs';

export default (
  <Routes>
    <Route path="/docs/home" element={<Home />} />
    <Route path="/docs/accordion-doc" element={<AccordionDocs />} />
    <Route path="/docs/button-doc" element={<Button />} />
    <Route path="/docs/card-doc" element={<Card />} />
    <Route path="/docs/input-doc" element={<Input />} />
    <Route path="/docs/checkbox-doc" element={<Checkbox />} />
    <Route path="/docs/checkbox-group-doc" element={<CheckboxGroup />} />
    <Route path="/docs/link-doc" element={<Link />} />
    <Route path="/docs/modal-doc" element={<Modal />} />
    <Route path="/docs/radio-doc" element={<Radio />} />
    <Route path="/docs/table-doc" element={<Table />} />
  </Routes>
);
