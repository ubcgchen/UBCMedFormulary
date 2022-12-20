import javax.swing.*;
import java.awt.datatransfer.DataFlavor;
import java.awt.datatransfer.StringSelection;
import java.awt.datatransfer.Transferable;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;

public class WeekUpdaterGUI extends JFrame {

    private JPanel mainPanel;

    private JList<String> source;
    private JList<String> target;

    private DefaultListModel<String> modelMidterm = new DefaultListModel<>();
    private DefaultListModel<String> modelFinal = new DefaultListModel<>();
    private DefaultListModel<String> srcModel;
    private DefaultListModel<String> dstModel;

    private JButton updateWeeks;

    private JComboBox examOneSelection;
    private JComboBox examTwoSelection;

    ArrayList<String> m411Midterm;
    ArrayList<String> m411Final;

    private HashMap<String, DefaultListModel> modelMap = new HashMap<>();
    private HashMap<String, String> fileNameMap = new HashMap<>();

    public WeekUpdaterGUI(String title) {
        super(title);

        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setContentPane(mainPanel);
        this.pack();

        m411Midterm = readFile("../app/data/m411Midterm.txt");
        modelMidterm.removeAllElements();
        modelMidterm.addAll(m411Midterm);

        m411Final = readFile("../app/data/m411Final.txt");
        modelFinal.removeAllElements();
        modelFinal.addAll(m411Final);

        // Default: source is midterm and target is final
        srcModel = modelMidterm;
        dstModel = modelFinal;
        source.setModel(srcModel);
        target.setModel(dstModel);
        source.setDragEnabled(true);
        target.setDropMode(DropMode.ON_OR_INSERT);
        source.setTransferHandler(new ExportTransferHandler());
        target.setTransferHandler(new ImportTransferHandler());

        modelMap.put("MEDD 411 Midterm", modelMidterm);
        modelMap.put("MEDD 411 Final", modelFinal);
        fileNameMap.put("MEDD 411 Midterm", "m411Midterm");
        fileNameMap.put("MEDD 411 Final", "m411Final");

        examOneSelection.addItemListener(new ItemListener() {
            @Override
            public void itemStateChanged(ItemEvent e) {
                String item = examOneSelection.getSelectedItem().toString();
                srcModel = modelMap.get(item);
                source.setModel(srcModel);
            }
        });

        examTwoSelection.addItemListener(new ItemListener() {
            @Override
            public void itemStateChanged(ItemEvent e) {
                String item = examTwoSelection.getSelectedItem().toString();
                dstModel = modelMap.get(item);
                target.setModel(dstModel);
            }
        });

        updateWeeks.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String examOneName = fileNameMap.get(examOneSelection.getSelectedItem().toString());
                String examTwoName = fileNameMap.get(examTwoSelection.getSelectedItem().toString());

                writeTxt(srcModel, examOneName);
                writeTxt(dstModel, examTwoName);

                try {
                    File f = new File("../app/data/weeks.js");
                    FileWriter fw = new FileWriter(f);
                    fw.write("export const m411Midterm = [");
                    for (Object s : modelMap.get("MEDD 411 Midterm").toArray()) {
                        fw.write(s.toString() + ",\n");
                    }
                    fw.write("]\n\n");

                    fw.write("export const m411Final = [");
                    for (Object s : modelMap.get("MEDD 411 Final").toArray()) {
                        fw.write(s.toString() + ",\n");
                    }
                    fw.write("]\n\n");
                    fw.flush();
                    fw.close();
                } catch (IOException ioException) {
                    //Do nothing
                }
            }
        });
    }

    private void writeTxt(DefaultListModel<String> model, String examName) {
        String fileName = "../app/data/" + examName + ".txt";

        try {
            PrintWriter writer = null;
            writer = new PrintWriter(fileName);
            writer.print("");
            writer.close();
        } catch (FileNotFoundException e) {
            //do nothing
        }

        for(int i = 0; i < model.toArray().length; i++) {
            try (BufferedWriter bw
                         = new BufferedWriter(new FileWriter(fileName, true))) {
                String s;
                s = model.toArray()[i].toString();
                bw.write(s);
                bw.newLine();
                bw.flush();
            } catch(IOException ex) {
                ex.printStackTrace();
            }
        }
    }

    private class ExportTransferHandler extends TransferHandler {
        public int getSourceActions(JComponent c){
            return TransferHandler.COPY_OR_MOVE;
        }

        public Transferable createTransferable(JComponent c) {
            return new StringSelection(source.getSelectedValue());
        }
    }

    private class ImportTransferHandler extends TransferHandler {

        public boolean canImport(TransferSupport supp) {
            if (!supp.isDataFlavorSupported(DataFlavor.stringFlavor)) {
                return false;
            }
            return true;
        }

        public boolean importData(TransferSupport supp) {
            // Fetch the Transferable and its data
            Transferable t = supp.getTransferable();
            String data = "";
            try {
                data = (String)t.getTransferData(DataFlavor.stringFlavor);
            } catch (Exception e){
                System.out.println(e.getMessage());
                return false;
            }

            // Fetch the drop location
            JList.DropLocation loc = target.getDropLocation();
            int row = loc.getIndex();
            dstModel.add(row, data);
            target.validate();

            srcModel.removeElement(data);
            source.validate();
            return true;
        }
    }

    public ArrayList<String> readFile(String path) {
        ArrayList<String> temp = new ArrayList<>();

        try (BufferedReader in = new BufferedReader(new FileReader(path))) {
            String str;
            while ((str = in.readLine()) != null) {
                temp.add(str);
            }
        } catch (IOException e) {
            // Do nothing
        }
        return temp;
    }

    public static void main(String[] args) {
        JFrame frame = new WeekUpdaterGUI("Week Updater Tool");
        frame.setVisible(true);
    }
}


