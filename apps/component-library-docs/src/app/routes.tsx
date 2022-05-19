import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import AccordionDocs from './pages/accordion/accordion-docs';
import ButtonDocs from './pages/button/button-docs';
import CheckboxDocs from './pages/checkbox/checkbox-docs';
import CardDocs from './pages/card/card-docs';
import CheckboxGroupDocs from './pages/checkbox-group/checkbox-group-docs';
import DropdownDocs from './pages/dropdown/dropdown-docs';
import IconsDocs from './pages/icons/icons-docs';
import InputDocs from './pages/input/input-docs';
import LinkDocs from './pages/link/link-docs';
import ModalDocs from './pages/modal/modal-docs';
import RadioDocs from './pages/radio/radio-docs';
import TableDocs from './pages/table/table-docs';
import ImageDocs from './pages/image/image-docs';
import VideoDocs from './pages/video/video-docs';

export default (
  <Routes>
    <Route path="/docs/home" element={<Home />} />
    <Route path="/docs/accordion-docs" element={<AccordionDocs />} />
    <Route path="/docs/button-docs" element={<ButtonDocs />} />
    <Route path="/docs/card-docs" element={<CardDocs />} />
    <Route path="/docs/icons-docs" element={<IconsDocs />} />
    <Route path="/docs/input-docs" element={<InputDocs />} />
    <Route path="/docs/image-docs" element={<ImageDocs />} />
    <Route path="/docs/checkbox-docs" element={<CheckboxDocs />} />
    <Route path="/docs/checkbox-group-docs" element={<CheckboxGroupDocs />} />
    <Route path="/docs/dropdown-docs" element={<DropdownDocs />} />
    <Route path="/docs/link-docs" element={<LinkDocs />} />
    <Route path="/docs/modal-docs" element={<ModalDocs />} />
    <Route path="/docs/radio-docs" element={<RadioDocs />} />
    <Route path="/docs/table-docs" element={<TableDocs />} />
    <Route path="/docs/video-docs" element={<VideoDocs />} />
  </Routes>
);
