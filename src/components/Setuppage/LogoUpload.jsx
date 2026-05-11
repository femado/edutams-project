import { FiUpload } from "react-icons/fi";
import { LuImage } from "react-icons/lu";

const LogoUpload = () => {
  return (
    <div className="setup-logo-card">
      <div className="setup-logo-preview" aria-hidden="true">
        <LuImage />
      </div>

      <label className="setup-browse-button">
        <input type="file" accept="image/*" aria-label="Upload school logo" />
        <span className="setup-upload-icon">
          <FiUpload aria-hidden="true" />
        </span>
        Browse
      </label>
    </div>
  );
};

export default LogoUpload;
