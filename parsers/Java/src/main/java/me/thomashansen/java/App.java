package me.thomashansen.java;

import japa.parser.JavaParser;
import japa.parser.ast.CompilationUnit;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import javax.swing.JFileChooser;
import org.codehaus.jackson.map.ObjectMapper;

/**
 * Hello world!
 *
 */
public class App
{

	static Data data = new Data();

	public static void parseDir(File f)
	{
		for (File c : f.listFiles())
		{
			if (c.isHidden())
			{
				
			}
			else if (c.isDirectory())
			{
				System.out.println(c);
				parseDir(c);
			}
			else if (c.isFile() && c.getPath().endsWith(".java"))
			{
				parseFile(c);
			}
		}
	}

	public static void parseFile(File f)
	{
		System.out.println(f);
		try
		{
			FileInputStream in = new FileInputStream(f);
			CompilationUnit ast = JavaParser.parse(in);
			MethodVisitor v = new MethodVisitor();
			ast.accept(v, data);
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}

	public static void main(String[] args) throws Exception
	{
		JFileChooser jfc = new JFileChooser();
		jfc.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
		jfc.showOpenDialog(null);

		parseDir(jfc.getSelectedFile());

		ObjectMapper mapper = new ObjectMapper();
		
		File outFile = new File("data.js");
		FileOutputStream out = new FileOutputStream(outFile);
		mapper.writeValue(out, data);
		System.out.println("Data written to " + outFile.getAbsolutePath());
		
//		mapper.writeValue(System.out, data);

//		ObjectWriter writer = mapper.writer().withDefaultPrettyPrinter();
//		System.out.println(writer.writeValueAsString(data));
	}
}
