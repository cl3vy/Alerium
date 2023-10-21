"use client";
import React, { useCallback, DragEvent, useState } from "react";
// Shad CN Components
import {Input} from '@/components/ui/input';
import { Label } from "@/components/ui/label";
// Custom Components
import {Stack} from '@constants/components';
// Types And Interfaces
type UploadPDFProps = {
  onSelection: (pdf: File | undefined) => void
}
// Styles
import styles from './style';
function UploadPDF({onSelection}:UploadPDFProps) {
  const [file, setFile] = useState<File | undefined>();
  const onDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setFile(files[0])
    // Do something with the files
  }, []);

  const onDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  return (
    <Stack onDrop={onDrop} onDragOver={onDragOver}>
      <Stack className={styles.innerContainer}>
        <Label htmlFor="picture">PDF</Label>
        <Input id="PDF" type="file" onChange={(e) => { setFile(e.target.files?.[0]);  onSelection(e.target.files?.[0])}}/>
      </Stack>
    </Stack>
  );
}

export default UploadPDF;
export type {UploadPDFProps}
