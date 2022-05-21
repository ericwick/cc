import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AccordionDocs from './pages/accordion/accordion-docs';
import AutocompleteDocs from './pages/inputs/autocomplete/autocomplete-docs';
import ButtonDocs from './pages/button/button-docs';
import CardDocs from './pages/card/card-docs';
import CheckboxDocs from './pages/inputs/checkbox/checkbox-docs';
import ContainerDocs from './pages/container/container-docs';
import DrawerDocs from './pages/drawer/drawer-docs';
import DropdownDocs from './pages/dropdown/dropdown-docs';
import FileUploaderDocs from './pages/file-uploader/file-uploader-docs';
import FooterDocs from './pages/footer/footer-docs';
import FormDocs from './pages/inputs/form/form-docs';
import GridDocs from './pages/grid/grid-docs';
import HeaderDocs from './pages/header/header-docs';
import IconsDocs from './pages/icons/icons-docs';
import ImageDocs from './pages/image/image-docs';
import InputsDocs from './pages/inputs/inputs-docs';
import LinkDocs from './pages/link/link-docs';
import ModalDocs from './pages/modal/modal-docs';
import PaginationDocs from './pages/pagination/pagination-docs';
import PasswordDocs from './pages/inputs/password/password-docs';
import PopoverDocs from './pages/popover/popover-docs';
import RadioDocs from './pages/inputs/radio/radio-docs';
import SpacerDocs from './pages/spacer/spacer-docs';
import SwitchDocs from './pages/inputs/switch/switch-docs';
import TableDocs from './pages/table/table-docs';
import TooltipDocs from './pages/tooltip/tooltip-docs';
import VideoDocs from './pages/video/video-docs';

export default (
  <Routes>
    <Route path="/docs/home" element={<Home />} />
    <Route path="/docs/accordion" element={<AccordionDocs />} />
    <Route path="/docs/inputs/autocomplete" element={<AutocompleteDocs />} />
    <Route path="/docs/button" element={<ButtonDocs />} />
    <Route path="/docs/card" element={<CardDocs />} />
    <Route path="/docs/inputs/checkbox" element={<CheckboxDocs />} />
    <Route path="/docs/container" element={<ContainerDocs />} />
    <Route path="/docs/drawer" element={<DrawerDocs />} />
    <Route path="/docs/dropdown" element={<DropdownDocs />} />
    <Route path="/docs/file-uploader" element={<FileUploaderDocs />} />
    <Route path="/docs/footer" element={<FooterDocs />} />
    <Route path="/docs/inputs/form" element={<FormDocs />} />
    <Route path="/docs/grid" element={<GridDocs />} />
    <Route path="/docs/header" element={<HeaderDocs />} />
    <Route path="/docs/pagination" element={<PaginationDocs />} />
    <Route path="/docs/inputs/password" element={<PasswordDocs />} />
    <Route path="/docs/popover" element={<PopoverDocs />} />
    <Route path="/docs/spacer" element={<SpacerDocs />} />
    <Route path="/docs/icons" element={<IconsDocs />} />
    <Route path="/docs/inputs" element={<InputsDocs />} />
    <Route path="/docs/image" element={<ImageDocs />} />
    <Route path="/docs/link" element={<LinkDocs />} />
    <Route path="/docs/modal" element={<ModalDocs />} />
    <Route path="/docs/inputs/radio" element={<RadioDocs />} />
    <Route path="/docs/spacer" element={<SpacerDocs />} />
    <Route path="/docs/inputs/switch" element={<SwitchDocs />} />
    <Route path="/docs/table" element={<TableDocs />} />
    <Route path="/docs/tooltip" element={<TooltipDocs />} />
    <Route path="/docs/video" element={<VideoDocs />} />
  </Routes>
);
