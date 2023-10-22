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
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
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
    <Stack onDrop={onDrop} onDragOver={onDragOver} className={styles.container}>
      <Stack className={styles.innerContainer}>
        <Upload className={'absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] h-[40%] w-[40%] opacity-30'}/>
        <Label htmlFor="picture" className={styles.label}>Upload a PDF Contract</Label>
        <Input id="PDF" type="file" onChange={(e) => { setFile(e.target.files?.[0])}}/>
      </Stack>
      <Button onClick={() => onSelection(file)} className={styles.button}>Upload PDF</Button>
    </Stack>
  );
}

export default UploadPDF;
export type {UploadPDFProps}
