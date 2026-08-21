import React, { useEffect, useCallback, useState, useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "./../data"
import "./../css/modal.scss"

// Helper function to detect if file is a video
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = ['.webm', '.mp4', '.mov', '.avi'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

// Positions are authored as "Role - Organization". The organization is shown
// beside the logo, so peel it off the headline instead of repeating it.
const splitPosition = (positionText, fallbackOrg) => {
  const separatorIndex = positionText.lastIndexOf(" - ");
  if (separatorIndex === -1) return { role: positionText, org: fallbackOrg };
  return {
    role: positionText.slice(0, separatorIndex).trim(),
    org: positionText.slice(separatorIndex + 3).trim(),
  };
};

const FOCUSABLE = 'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

export default function Modal({ closeModal, id, type = "project", totalItems = 0, onPrevious, onNext }) {
  const { language } = useLanguage();
  const [isClosing, setIsClosing] = useState(false);
  const containerRef = useRef(null);
  const restoreFocusRef = useRef(null);

  const isProject = type === "project";
  const content = isProject ? data.projects[id] : data.education[id];

  const organization = getText(content.title, language);
  const { role, org } = isProject
    ? splitPosition(getText(content.position, language), organization)
    : { role: organization, org: "" };

  const summary = getText(content.para, language);
  const dateLabel = isProject ? (content.date || "").trim() : "";
  const media = content.workImg || content.imageSrc;
  // The internal /work/* routes are unused, so only surface real external links.
  const externalUrl = content.url && content.url.startsWith("http") ? content.url : null;

  const hasPrevious = id > 0;
  const hasNext = id < totalItems - 1;

  // Enhanced close function with animation
  const handleClose = useCallback(() => {
    setIsClosing(true);
    // Wait for animation to complete before actually closing
    setTimeout(() => {
      closeModal(false);
    }, 300); // Match the CSS animation duration
  }, [closeModal]);

  const handlePrevious = useCallback(() => {
    if (onPrevious && id > 0) {
      onPrevious();
    }
  }, [onPrevious, id]);

  const handleNext = useCallback(() => {
    if (onNext && id < totalItems - 1) {
      onNext();
    }
  }, [onNext, id, totalItems]);

  // Keyboard navigation, plus a tab trap so focus can't escape the dialog
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      } else if (e.key === 'Tab' && containerRef.current) {
        const focusable = Array.from(containerRef.current.querySelectorAll(FOCUSABLE));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    try {
      document.addEventListener('keydown', handleKeyDown);
    } catch (error) {
      console.warn('Error adding keydown listener:', error);
    }

    return () => {
      // Safely remove event listener
      try {
        document.removeEventListener('keydown', handleKeyDown);
      } catch (error) {
        // Suppress any DOM manipulation errors
        console.warn('Error removing keydown listener:', error);
      }
    };
  }, [handlePrevious, handleNext, handleClose]);

  useEffect(() => {
    // Simple approach: just disable scrolling without positioning tricks
    try {
      restoreFocusRef.current = document.activeElement;
      document.body.classList.add('modal-open');
      containerRef.current?.focus();
    } catch (error) {
      // Suppress any DOM manipulation errors
      console.warn('Modal setup failed:', error);
    }

    // Clean up function to re-enable scrolling when modal is unmounted
    return () => {
      try {
        document.body.classList.remove('modal-open');
        restoreFocusRef.current?.focus?.();
      } catch (error) {
        // Suppress any DOM manipulation errors
        console.warn('Modal teardown failed:', error);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`modalBackground ${isClosing ? 'closing' : ''}`}
        onClick={handleClose}
        aria-hidden="true"
      ></div>
      <div
        className={`modalContainer ${isClosing ? 'closing' : ''}`}
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-role"
        tabIndex={-1}
      >
        <div className="modal-topbar">
          <div className="modal-org">
            {content.imageSrc && (
              <span className="modal-org-logo">
                <img src={content.imageSrc} alt="" loading="lazy" />
              </span>
            )}
            {org && <span className="modal-org-name">{org}</span>}
          </div>

          <div className="modal-topbar-actions">
            {totalItems > 1 && (
              <span className="modal-counter">
                {id + 1} / {totalItems}
              </span>
            )}
            <button
              className="modal-close"
              onClick={handleClose}
              aria-label={getText(data.buttons.close, language)}
              type="button"
            >
              <span aria-hidden="true">&#215;</span>
            </button>
          </div>
        </div>

        <div className="modal-heading">
          <h1 id="modal-role">{role}</h1>
          {dateLabel && <p className="modal-date">{dateLabel}</p>}
          {summary && <p className="modal-summary">{summary}</p>}
        </div>

        <div className="modal-body">
          <div className="modal-media-panel">
            {isVideoFile(media) ? (
              <video
                src={media}
                className="modal-media"
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
              />
            ) : (
              <img src={media} alt="" className="modal-media" loading="lazy" />
            )}
            {externalUrl && (
              <a
                className="modal-external-link"
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getText(data.modal.visitSite, language)}
              </a>
            )}
          </div>

          <div className="modal-highlights">
            <h2 className="modal-highlights-title">
              {getText(data.modal.highlights, language)}
            </h2>
            <ol>
              {content.description.map((desc, index) => (
                <li key={index}>
                  <span className="modal-highlight-index" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span className="modal-highlight-text">
                    {getText(desc, language)}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {totalItems > 1 && (
          <div className="modal-footer-nav">
            <button
              className="modal-nav-btn"
              onClick={handlePrevious}
              disabled={!hasPrevious}
              type="button"
            >
              <span aria-hidden="true">&#8249;</span>
              {getText(data.modal.previous, language)}
            </button>
            <button
              className="modal-nav-btn"
              onClick={handleNext}
              disabled={!hasNext}
              type="button"
            >
              {getText(data.modal.next, language)}
              <span aria-hidden="true">&#8250;</span>
            </button>
          </div>
        )}
      </div>
    </>
  )
}
